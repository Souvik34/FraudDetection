import mongoose from 'mongoose';


const  userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },

        email: 
        {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,

        },

        password: {
            type: String,
            required: true,
            min: 6,
            max: 12,
        },

      role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },

        isVerified: 
        {
            type: Boolean,
            default: false,
        },

        kycStatus:
        {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
        lastLoginIP :
        {
            type: String,
        },
        lastLoginDate :
        {
            type: Date,
        },
        lastLoginDevice:
        {
            type: String,
        },
        failedLoginAttempts:
        {
            type: Number,
            default: 0,
        },

        accountRiskScore:
        {
            type: Number,
            default: 0,
        },

        avgTransactionAmount:
        {
            type: Number,
            default: 0,
        },
        avgDailyTransactions:
        {
            type: Number,
            default: 0,
        },
        lastTransactionDate:
        {
            type: Date,
        }
    },
    { timestamps: true },
);

export const User = mongoose.model('User', userSchema);