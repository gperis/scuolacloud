<?php namespace SC;

use Carbon\Carbon;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use Illuminate\Database\Eloquent\Model;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract
{

    use Authenticatable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'ssn', 'first_name', 'last_name', 'gender',
        'birthdate', 'birth_location_id', 'res_location_id', 'email', 'password',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    public function emailsFrom()
    {
        return $this->hasMany('SC\Email', 'from_id');
    }

    public function emailsTo()
    {
        return $this->hasMany('SC\Email', 'to_id');
    }

    public function tests()
    {
        return $this->hasMany('SC\Test');
    }

    public function tutoring()
    {
        return $this->belongsToMany('SC\Tutoring');
    }

    public function notifications()
    {
        return $this->hasMany('SC\Notification');
    }

    public function schoolClasses()
    {
        return $this->belongsToMany('SC\SchoolClass', 'class_user', 'user_id', 'class_id');
    }

    public function lessons()
    {
        return $this->belongsToMany('SC\Lesson');
    }

    public function files()
    {
        return $this->hasMany('SC\File');
    }

    public function groups()
    {
        return $this->belongsToMany('SC\Group');
    }

    public function birth_location()
    {
        return $this->belongsTo('SC\Location', 'birth_location_id', 'woeid');
    }

    public function res_location()
    {
        return $this->belongsTo('SC\Location', 'res_location_id', 'woeid');
    }

    /**
     * Check if the user is in a given group.
     *
     * @param int $gId Group id
     */
    public function scopeInGroup($query, $gId)
    {
        return $query->where('groups.id', $gId);
    }

    public function fullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    /**
     * Get user's global level.
     *
     * @return int
     */
    public function level()
    {
        $groups = $this->groups;

        if ($groups->count() > 1)
            $groups->sortByDesc('permissions');

        return (int) $groups->first()->permissions;
    }

    public function inGroup($gId)
    {
        return (bool) $this->groups()->where('group_id', $gId)->count();
    }


    public function scopeStudents($query)
    {
        return $query->join('group_user', 'users.id', '=', 'group_user.user_id')
                     ->where('group_user.group_id', 4);
    }

    public function getBirthdateAttribute($value)
    {
        return Carbon::parse($value);
    }

    public function setBirthdateAttribute($value)
    {
        $this->attributes['birthdate'] = Carbon::createFromFormat('d/m/Y', $value);
    }
}
